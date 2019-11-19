import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';
import { PostComponent } from '../../components/post/post.component';
import { PostsAddComponent } from '../../components/posts-add/posts-add.component';
import { PostsViewComponent } from '../../components/posts-view/posts-view.component';
import { TopicComponent } from '../../components/topic/topic.component';
import { TopicsAddComponent } from '../../components/topics-add/topics-add.component';
import { TopicsViewComponent } from '../../components/topics-view/topics-view.component';

// Import canActivate guard services
import { AuthGuard } from '../../shared/guard/auth.guard';
import { SecureInnerPagesGuard } from '../../shared/guard/secure-inner-pages.guard';

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'post', component: PostComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'posts-add', component: PostsAddComponent, canActivate: [AuthGuard] },
  { path: 'posts-view', component: PostsViewComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'topic', component: TopicComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'topics-add', component: TopicsAddComponent, canActivate: [AuthGuard] },
  { path: 'topics-view', component: TopicsViewComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
