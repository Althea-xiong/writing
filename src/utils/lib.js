/**
 *
 * @param {*} queries query参数
 * @description 生成查询参数， get参数传递数组会自动编码，手动将特殊编码替换，已适配后端
 * @example
 * generateQueryParams([
 *   { key: "value" },
 *   { key: "value" }
 * ]);
 * @param {Array} queries - An array of query objects to be converted into query parameters.
 * @returns {string} - A string representing the query parameters, formatted as a URL query string.
 */
export function generateQueryParams(queries) {
  const encode_str =
    "?" +
    queries
      .map((query) => `queries[]=${encodeURIComponent(JSON.stringify(query))}`)
      .join("&");

  return encode_str
    .replace(/%7B/g, "{")
    .replace(/%7D/g, "}")
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]")
    .replace(/%3A/g, ":")
    .replace(/%2C/g, ",")
    .replace(/%20/g, "");
}
