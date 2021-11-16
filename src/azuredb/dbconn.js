const storage = require('azure-storage');
const connectionString = "DefaultEndpointsProtocol=https;AccountName=capstonewebclient;AccountKey=kv2KFZ7haF7iX1OiFcrLnbB8TXBCEWF3WfcpvSR7ZlGU0uVX0HMQo4Anc5lZcogrSJKzQKZMfcVrHc7DGBCEIA==;TableEndpoint=https://capstonewebclient.table.cosmos.azure.com:443/;";
const storageClient = storage.createTableService(connectionString);
