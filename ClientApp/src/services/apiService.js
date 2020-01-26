export const apiService = (function() {
  const API_ROOT = document.getElementById("apiBaseUrl").getAttribute("value");

  return {
    getApiRoot: () => {
      return API_ROOT;
    }
  };
})();
