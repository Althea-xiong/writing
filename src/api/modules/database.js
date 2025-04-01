import { request } from "../request";
import { generateQueryParams } from "@/utils";

/**
 *
 * @function get_collections_list 根据条件获取文档列表
 * @param {string} collectionType - The type of the collection to retrieve documents from.
 * @param {Object} [data={}] - Optional data to include in the request.
 * @returns {void} This function does not return a value.
 */
export const get_collections_list = (collectionType, data = {}) => {
  const params_str = generateQueryParams(data.queries);

  return request({
    url: `/databases/${
      import.meta.env.VITE_DATABASE_ID
    }/collections/${collectionType}/documents/${params_str || ""}`,
    method: "get",
  });
};

/**
 *
 * @function get_collection_by_id 根据表类型、文档 ID 获取单个文档
 * @param {string} collectionType - The type or name of the collection to query.
 * @param {string} documentId - The unique identifier of the document to retrieve.
 * @param {Object} [data={}] - Optional additional data to include in the request.
 * @returns {Promise} - This function does not return a value.
 */
export const get_collection_by_id = (collectionType, documentId, data = {}) => {
  return request({
    url: `/databases/${
      import.meta.env.VITE_DATABASE_ID
    }/collections/${collectionType}/documents/${documentId}`,
    method: "get",
    data,
  });
};

/**
 *
 * @function create_collection_document 在指定表中创建新文档
 * @param {string} collectionType - The type or name of the collection to create a document in.
 * @param {Object} data - The data to create the new document with.
 * @returns {Promise} - This function does not return a value.
 */
export const create_collection_document = (collectionType, data = {}) => {
  return request({
    url: `/databases/${
      import.meta.env.VITE_DATABASE_ID
    }/collections/${collectionType}/documents`,
    method: "post",
    data,
  });
};

/**
 *
 * @function update_collection_by_id 根据表类型、文档 ID 更新单个文档
 * @param {string} collectionType - The type or name of the collection to update.
 * @param {string} documentId - The unique identifier of the document to update.
 * @param {Object} data - The data to update the document with.
 * @returns {Promise} - This function does not return a value.
 */
export const update_collection_by_id = (collectionType, documentId, data) => {
  return request({
    url: `/databases/${
      import.meta.env.VITE_DATABASE_ID
    }/collections/${collectionType}/documents/${documentId}`,
    method: "patch",
    data,
  });
};

/**
 *
 * @function delete_collection_by_id 根据表类型、文档 ID 删除单个文档
 * @param {string} collectionType - The type or name of the collection to delete from.
 * @param {string} documentId - The unique identifier of the document to delete.
 * @returns {Promise} - This function does not return a value.
 */
export const delete_collection_by_id = (collectionType, documentId) => {
  return request({
    url: `/databases/${
      import.meta.env.VITE_DATABASE_ID
    }/collections/${collectionType}/documents/${documentId}`,
    method: "delete",
  });
};
