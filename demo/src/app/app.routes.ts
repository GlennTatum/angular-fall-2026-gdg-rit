import { Routes } from '@angular/router';
import { DemoComponent } from './demo-component/demo-component';
import { DemoTemplate } from './demo-template/demo-template';
import { DemoControlFlow } from './demo-control-flow/demo-control-flow';
import { DemoEventHandler } from './demo-event-handler/demo-event-handler';
import { DemoTwoWay } from './demo-two-way/demo-two-way';
import { DemoInputParent } from './demo-input-parent/demo-input-parent';
import { DemoOutput } from './demo-output/demo-output';
import { DemoOutputParent } from './demo-output-parent/demo-output-parent';
import { DemoForm } from './demo-form/demo-form';
import { DemoCatComponent } from './demo-cat-component/demo-cat-component';

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
    },
    {
        path: 'demo-two-way',
        component: DemoTwoWay
    },
    {
        path: 'demo-input',
        component: DemoInputParent
    },
    {
        path: 'demo-output',
        component: DemoOutputParent
    },
    {
        path: 'demo-form',
        component: DemoForm
    },
    {
        path: 'demo-http',
        component: DemoCatComponent
    }
];
