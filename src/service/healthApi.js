class HealthApi {
  static getServiceStatuses(serviceName) {
    return fetch(`https://localhost:5001/statuses/${serviceName}`)
      .then((response) => response.json());
  }

  static getServiceList() {
    return fetch('https://localhost:5001/statuses/')
      .then((response) => response.json());
  }
}

export default HealthApi;
