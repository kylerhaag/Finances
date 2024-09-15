import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BudgetsComponent } from './budgets/budgets.component'; 
import { GoalsComponent } from './goals/goals.component'; 

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'accounts', component: AccountsComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'budgets', component: BudgetsComponent },
    { path: 'goals', component: GoalsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  ];
  
// export const routes: Routes = [];
