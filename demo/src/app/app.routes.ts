import { Routes } from '@angular/router';
import { DemoComponent } from './demo-component/demo-component';
import { DemoTemplate } from './demo-template/demo-template';
import { DemoControlFlow } from './demo-control-flow/demo-control-flow';
import { DemoEventHandler } from './demo-event-handler/demo-event-handler';

export const routes: Routes = [
    {
        path: 'demo-component',
        component: DemoComponent
    },
    {
        path: 'demo-template',
        component: DemoTemplate
    },
    {
        path: 'demo-control-flow',
        component: DemoControlFlow
    },
    {
        path: 'demo-event-handler',
        component: DemoEventHandler
    }
];
