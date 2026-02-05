import { Routes } from '@angular/router';
import { TableDashboardPage } from './component/table-dashboard-page/table-dashboard-page';
import { ProductResolver } from './guards/product.resolver';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'producttable', component: TableDashboardPage, resolve: { productDetails: ProductResolver } }
];
