const cds = require("@sap/cds");

module.exports = class CatalogService extends cds.ApplicationService {
  init() {
    const { Orders } = cds.entities("ab.CatalogService");

    this.before(["CREATE", "UPDATE"], Orders, async (req) => {
      console.log("Before CREATE/UPDATE Orders", req.data);
    });

    return super.init();
  }
};
