const wrapper = require("../../../helpers/utils/wrapper");
const commandHandler = require("../repositories/commands/command_handler");
const commandModel = require("../repositories/commands/command_model");
const queryHandler = require("../repositories/queries/query_handler");
const validator = require("../utils/validator");
const {
  ERROR: httpError,
  SUCCESS: http,
} = require("../../../helpers/http-status/status_code");



const getAllCategory = async (req, res) => {
    const getData = (async) => queryHandler.getAllCategory();
    const sendResponse = async (result) => {
      result.err
        ? wrapper.response(
            res,
            "fail",
            result,
            "Get all Category",
            httpError.NOT_FOUND
          )
        : wrapper.response(res, "success", result, "Get all Category", http.OK);
    };
    sendResponse(await getData());
  };
  
  const getCategoryById = async (req, res) => {
    const { id } = req.params;
    const getData = (async) => queryHandler.getCategoryById(id);
    const sendResponse = async (result) => {
      result.err
        ? wrapper.response(
            res,
            "fail",
            result,
            "Get Category",
            httpError.NOT_FOUND
          )
        : wrapper.response(res, "success", result, "Get Category", http.OK);
    };
    sendResponse(await getData());
  };
  
  const createCategory = async (req, res) => {
    const payload = req.body;
    const validatePayload = validator.isValidPayload(
      payload,
      commandModel.Category
    );
    const postRequest = async (result) => {
      if (result.err) {
        return result;
      }
      return commandHandler.insertCategory(result.data);
    };
    const sendResponse = async (result) => {
      result.err
        ? wrapper.response(
            res,
            "fail",
            result,
            "Insert Category",
            httpError.NOT_FOUND
          )
        : wrapper.response(res, "success", result, "Insert Category", http.OK);
    };
    sendResponse(await postRequest(validatePayload));
  };
  
  module.exports = {
    getCategoryById,
    getAllCategory,
    createCategory,
  };
  