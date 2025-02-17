import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import * as prettier from 'prettier';
import { EnumStatusCode } from '@wundergraph/cosmo-connect/dist/common/common_pb';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { joinLabel } from '@wundergraph/cosmo-shared';
import { afterAllSetup, beforeAllSetup, genID, genUniqueLabel } from '../src/core/test-util';
import { SetupTest } from './test-util';

let dbname = '';

describe('ComposeFederationV2Graphs', (ctx) => {
  beforeAll(async () => {
    dbname = await beforeAllSetup();
  });

  afterAll(async () => {
    await afterAllSetup(dbname);
  });

  test('Compose these federation v2 subgraph schemas(pandas, products, reviews, users)', async (testContext) => {
    const { client, server } = await SetupTest(testContext, dbname);

    const pandasSchema = await readFile(join(process.cwd(), 'test/graphql/federationV2/pandas.graphql'));
    const productsSchema = await readFile(join(process.cwd(), 'test/graphql/federationV2/products.graphql'));
    const reviewsSchema = await readFile(join(process.cwd(), 'test/graphql/federationV2/reviews.graphql'));
    const usersSchema = await readFile(join(process.cwd(), 'test/graphql/federationV2/users.graphql'));

    const federatedGraphName = genID();
    const label = genUniqueLabel();

    const createFederatedGraphResp = await client.createFederatedGraph({
      name: federatedGraphName,
      labelMatchers: [joinLabel(label)],
      routingUrl: 'http://localhost:8081',
    });
    expect(createFederatedGraphResp.response?.code).toBe(EnumStatusCode.OK);

    let resp = await client.createFederatedSubgraph({
      name: 'pandas',
      labels: [label],
      routingUrl: 'http://localhost:8000',
    });
    expect(resp.response?.code).toBe(EnumStatusCode.OK);

    resp = await client.publishFederatedSubgraph({
      name: 'pandas',
      schema: pandasSchema,
    });
    expect(resp.response?.code).toBe(EnumStatusCode.OK);

    resp = await client.createFederatedSubgraph({
      name: 'products',
      labels: [label],
      routingUrl: 'http://localhost:8001',
    });
    expect(resp.response?.code).toBe(EnumStatusCode.OK);

    resp = await client.publishFederatedSubgraph({
      name: 'products',
      schema: productsSchema,
    });
    expect(resp.response?.code).toBe(EnumStatusCode.OK);

    resp = await client.createFederatedSubgraph({
      name: 'reviews',
      labels: [label],
      routingUrl: 'http://localhost:8002',
    });
    expect(resp.response?.code).toBe(EnumStatusCode.OK);

    resp = await client.publishFederatedSubgraph({
      name: 'reviews',
      schema: reviewsSchema,
    });
    expect(resp.response?.code).toBe(EnumStatusCode.OK);

    resp = await client.createFederatedSubgraph({
      name: 'users',
      labels: [label],
      routingUrl: 'http://localhost:8002',
    });
    expect(resp.response?.code).toBe(EnumStatusCode.OK);

    resp = await client.publishFederatedSubgraph({
      name: 'users',
      schema: usersSchema,
    });
    expect(resp.response?.code).toBe(EnumStatusCode.OK);

    const graph = await client.getFederatedGraphByName({
      name: federatedGraphName,
    });

    expect(graph.response?.code).toBe(EnumStatusCode.OK);
    expect(graph.graph?.compositionErrors).toBe('');
    expect(graph.graph?.isComposable).toBe(true);

    const fetchSchemaResp = await client.getFederatedGraphSDLByName({
      name: federatedGraphName,
    });
    expect(fetchSchemaResp.response?.code).toBe(EnumStatusCode.OK);

    const composedFederatedGraphSchema = await readFile(
      join(process.cwd(), 'test/graphql/federationV2/composedFederatedV2Graph.graphql'),
      { encoding: 'utf8' },
    );
    let formattedFederatedSchemaSDL = '';
    if (fetchSchemaResp.sdl) {
      formattedFederatedSchemaSDL = await prettier.format(fetchSchemaResp.sdl, {
        parser: 'graphql',
      });
    }
    expect(formattedFederatedSchemaSDL).toBe(composedFederatedGraphSchema);

    await server.close();
  });
});
