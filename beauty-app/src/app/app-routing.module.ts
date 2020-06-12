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
    loadChildren: () => import('./pages/plans/plans.module').then( m => m.PlansPageModule)
  },
  {
    path: 'plans-detail',
    loadChildren: () => import('./pages/plans-detail/plans-detail.module').then( m => m.PlansDetailPageModule)
  },
  {
    path: 'procedures',
    loadChildren: () => import('./pages/procedures/procedures.module').then( m => m.ProceduresPageModule)
  },
  {
    path: 'procedures-detail',
    loadChildren: () => import('./pages/procedures-detail/procedures-detail.module').then( m => m.ProceduresDetailPageModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./pages/rooms/rooms.module').then( m => m.RoomsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'view-video',
    loadChildren: () => import('./pages/view-video/view-video.module').then( m => m.ViewVideoPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'modalrooms',
    loadChildren: () => import('./pages/modalrooms/modalrooms.module').then( m => m.ModalroomsPageModule)
  },
  {
    path: 'new-post',
    loadChildren: () => import('./pages/new-post/new-post.module').then( m => m.NewPostPageModule)
  },
  {
    path: 'data-complete',
    loadChildren: () => import('./pages/data-complete/data-complete.module').then( m => m.DataCompletePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'deposit',
    loadChildren: () => import('./pages/deposit/deposit.module').then( m => m.DepositPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 's-room',
    loadChildren: () => import('./pages/s-room/s-room.module').then( m => m.SRoomPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'admplans',
    loadChildren: () => import('./pages/admplans/admplans.module').then( m => m.AdmplansPageModule)
  },
  {
    path: 'admplansdetails',
    loadChildren: () => import('./pages/admplansdetails/admplansdetails.module').then( m => m.AdmplansdetailsPageModule)
  },
  {
    path: 'admroomsdetails',
    loadChildren: () => import('./pages/admroomsdetails/admroomsdetails.module').then( m => m.AdmroomsdetailsPageModule)
  },
  {
    path: 'admrooms',
    loadChildren: () => import('./pages/admrooms/admrooms.module').then( m => m.AdmroomsPageModule)
  },
  {
    path: 'admprocedures',
    loadChildren: () => import('./pages/admprocedures/admprocedures.module').then( m => m.AdmproceduresPageModule)
  },
  {
    path: 'admproceduresdetails',
    loadChildren: () => import('./pages/admproceduresdetails/admproceduresdetails.module').then( m => m.AdmproceduresdetailsPageModule)
  },
  {
    path: 'homeadmin',
    loadChildren: () => import('./pages/homeadmin/homeadmin.module').then( m => m.HomeadminPageModule)
  },
  {
    path: 'admreservas',
    loadChildren: () => import('./pages/admreservas/admreservas.module').then( m => m.AdmreservasPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./pages/share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'medicform',
    loadChildren: () => import('./pages/medicform/medicform.module').then( m => m.MedicformPageModule)
  },
  {
    path: 'medicalinfo',
    loadChildren: () => import('./pages/medicalinfo/medicalinfo.module').then( m => m.MedicalinfoPageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./pages/v-profile/v-profile.module').then( m => m.VProfilePageModule)
  },
  {

    path: 'medicalinfo',
    loadChildren: () => import('./pages/medicalinfo/medicalinfo.module').then( m => m.MedicalinfoPageModule)
  },
  {
    path: 'medicpatient',
    loadChildren: () => import('./pages/medicpatient/medicpatient.module').then( m => m.MedicpatientPageModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('./pages/trips/trips.module').then( m => m.TripsPageModule)

  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'modal-likes/:id',
    loadChildren: () => import('./pages/modal-likes/modal-likes.module').then( m => m.ModalLikesPageModule)
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
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'before-after',
    loadChildren: () => import('./pages/before-after/before-after.module').then( m => m.BeforeAfterPageModule)
  },
  {
    path: 'admbefore-after',
    loadChildren: () => import('./pages/admbefore-after/admbefore-after.module').then( m => m.AdmbeforeAfterPageModule)
  }







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
