import Client from "../../../../client";

/**
 * A namespaced client for the
 * `/v1/reference-data/locations/hotels/by-city` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```ts
 * const amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotels.byCity;
 * ```
 *
 * @param {Client} client
 */
export default class byCity {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Returns a list of hotels for a given area.
   *
   * @param {Object} params
   * @param {string} params.cityCode City IATA code
   * @return {Promise<Response|ResponseError>} a Promise
   *
   * Find list of hotels in Barcelona
   *
   * ```ts
   * amadeus.referenceData.locations.hotels.byCity.get({
   *   cityCode: 'BCN'
   * });
   * ```
   */
  public get(params: Object = {}) {
    return this.client.get(
      "/v1/reference-data/locations/hotels/by-city",
      params
    );
  }
}