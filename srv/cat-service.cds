
namespace ab;
using ab from '../db/data-model';

service CatalogService {
    entity Orders as projection on ab.Orders;
};