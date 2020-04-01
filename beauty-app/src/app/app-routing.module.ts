import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'plans',
    loadChildren: () => import('./pages/plans/plans.module').then( m => m.PlansPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'plans-detail',
    loadChildren: () => import('./pages/plans-detail/plans-detail.module').then( m => m.PlansDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'procedures',
    loadChildren: () => import('./pages/procedures/procedures.module').then( m => m.ProceduresPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'procedures-detail',
    loadChildren: () => import('./pages/procedures-detail/procedures-detail.module').then( m => m.ProceduresDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'rooms',
    loadChildren: () => import('./pages/rooms/rooms.module').then( m => m.RoomsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'view-video',
    loadChildren: () => import('./pages/view-video/view-video.module').then( m => m.ViewVideoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modalrooms',
    loadChildren: () => import('./pages/modalrooms/modalrooms.module').then( m => m.ModalroomsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'new-post',
    loadChildren: () => import('./pages/new-post/new-post.module').then( m => m.NewPostPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'data-complete',
    loadChildren: () => import('./pages/data-complete/data-complete.module').then( m => m.DataCompletePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'deposit',
    loadChildren: () => import('./pages/deposit/deposit.module').then( m => m.DepositPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 's-room',
    loadChildren: () => import('./pages/s-room/s-room.module').then( m => m.SRoomPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'admplans',
    loadChildren: () => import('./pages/admplans/admplans.module').then( m => m.AdmplansPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admplansdetails',
    loadChildren: () => import('./pages/admplansdetails/admplansdetails.module').then( m => m.AdmplansdetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admroomsdetails',
    loadChildren: () => import('./pages/admroomsdetails/admroomsdetails.module').then( m => m.AdmroomsdetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admrooms',
    loadChildren: () => import('./pages/admrooms/admrooms.module').then( m => m.AdmroomsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admprocedures',
    loadChildren: () => import('./pages/admprocedures/admprocedures.module').then( m => m.AdmproceduresPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admproceduresdetails',
    loadChildren: () => import('./pages/admproceduresdetails/admproceduresdetails.module').then( m => m.AdmproceduresdetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'homeadmin',
    loadChildren: () => import('./pages/homeadmin/homeadmin.module').then( m => m.HomeadminPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admreservas',
    loadChildren: () => import('./pages/admreservas/admreservas.module').then( m => m.AdmreservasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'share',
    loadChildren: () => import('./pages/share/share.module').then( m => m.SharePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'medicform',
    loadChildren: () => import('./pages/medicform/medicform.module').then( m => m.MedicformPageModule)
  },
  {
    path: 'medicalinfo',
    loadChildren: () => import('./pages/medicalinfo/medicalinfo.module').then( m => m.MedicalinfoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./pages/v-profile/v-profile.module').then( m => m.VProfilePageModule),
    canActivate: [AuthGuard]
  },
  {

    path: 'medicalinfo',
    loadChildren: () => import('./pages/medicalinfo/medicalinfo.module').then( m => m.MedicalinfoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'medicpatient',
    loadChildren: () => import('./pages/medicpatient/medicpatient.module').then( m => m.MedicpatientPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'trips',
    loadChildren: () => import('./pages/trips/trips.module').then( m => m.TripsPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modal-likes/:id',
    loadChildren: () => import('./pages/modal-likes/modal-likes.module').then( m => m.ModalLikesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'medicregister',
    loadChildren: () => import('./pages/medicregister/medicregister.module').then( m => m.MedicregisterPageModule)
  },
  {
    path: 'homemedic',
    loadChildren: () => import('./pages/homemedic/homemedic.module').then( m => m.HomemedicPageModule)
  },
  {
    path: 'medicavailable',
    loadChildren: () => import('./pages/medicavailable/medicavailable.module').then( m => m.MedicavailablePageModule)
  },
  {
    path: 'medicdone',
    loadChildren: () => import('./pages/medicdone/medicdone.module').then( m => m.MedicdonePageModule)
  },
  {
    path: 'medicprofile',
    loadChildren: () => import('./pages/medicprofile/medicprofile.module').then( m => m.MedicprofilePageModule)
  },
  {
    path: 'modal-spyp',
    loadChildren: () => import('./pages/modal-spyp/modal-spyp.module').then( m => m.ModalSpypPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
