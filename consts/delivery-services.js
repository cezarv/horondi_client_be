const SERVICES = {
  ID: '_id',
  DATE: '-date',
  INITIAL_TEXT: '',
  INITIAL_VALUE: '',
  INITIAL_PAGES: 1,
  EMAIL_CHAT_SUBJECT: `[HORONDI] ${
    !language ? 'відповідь на запитання' : 'question answer'
  }`,
  ADDRESS: 'Address',
  ADDRESS_GENERAL: 'AddressGeneral',
};

const DELIVERY_SERVICES_METHODS = {
  GET_CITIES: 'getCities',
  GET_STREET: 'getStreet',
  GET_WAREHOUSES: 'getWarehouses',
  GET_COUNTER_PARTY_CONTACT_PERSONS: 'getCounterpartyContactPersons',
  GET_COUNTER_PARTIES: 'getCounterparties',
  GET_DOCUMENT_PRICE: 'getDocumentPrice',
  SAVE: 'save',
  POST: 'POST',
  GET: 'GET',
};

const DELIVERY_SERVICE_MODELS = {
  INTERNET_DOCUMENT: 'InternetDocument',
  COUNTER_PARTY: 'Counterparty',
};

const DELIVERY_SERVICE_TYPES = {
  WAREHOUSE_DOORS: 'WarehouseDoors',
  WAREHOUSE_WAREHOUSE: 'WarehouseWarehouse',
};

const CARGO_TYPES = {
  CARGO: 'Cargo',
  PARCEL: 'Parcel',
};

const COUNTER_PARTY_PROPERTIES = {
  SENDER: 'Sender',
};

const URL_PARAMS = {
  CREATE_UKR_POSHTA_ORDER_PARAMS: `shipments?token=`,
  CREATE_UKR_POSHTA_USER_PARAMS: `clients?token=`,
  ADDRESSES: 'addresses',
};

module.exports = {
  SERVICES,
  DELIVERY_SERVICES_METHODS,
  DELIVERY_SERVICE_TYPES,
  CARGO_TYPES,
  DELIVERY_SERVICE_MODELS,
  COUNTER_PARTY_PROPERTIES,
  URL_PARAMS,
};
