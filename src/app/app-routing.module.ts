import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/papers/papers.component";
import { SettingsComponent } from "./views/admin/school/school.component";
import { TablesComponent } from "./views/admin/exams/exams.component";
import { FacultyComponent } from "./views/admin/faculty/faculty.component";
import { CorrectionComponent } from "./views/admin/correction/correction.component";
import { DomainComponent } from "./views/admin/domain/domain.component";
import { SessionComponent } from "./views/admin/session/session.component";
import { SubjectComponent } from "./views/admin/subject/subject.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "school", component: SettingsComponent },
      { path: "exams", component: TablesComponent },
      { path: "papers", component: MapsComponent },
      { path: "faculty", component: FacultyComponent },
      { path: "correction", component: CorrectionComponent },
      { path: "domain", component: DomainComponent },
      { path: "session", component: SessionComponent },
      { path: "subject", component: SubjectComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
