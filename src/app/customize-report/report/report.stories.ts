import { Meta,moduleMetadata,  Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ReportComponent } from './report.component';

import { HeadingComponent } from '../heading/heading.component'; 
import { ReportListComponent } from '../report-list/report-list.component';

import * as HeadingStories from '../heading/heading.stories';
import * as ReportListStories from '../report-list/report-list.stories';
import { CommonModule } from '@angular/common';



export default {
    component: ReportComponent,
    title: 'Final Report Configuration',
    excludeStories: /.*Data$/,
    decorators: [
        moduleMetadata({
          declarations: [HeadingComponent, ReportListComponent],
          imports: [CommonModule],
        }),
      ],
} as Meta;

const Template: Story = args => ({
    props: args,
});

export const FinalReportConfiguration = Template.bind({});
FinalReportConfiguration.args = {
    header: HeadingStories.Headers.args['heading'],
    subHeader: HeadingStories.Sub.args['Sub'],
    reports: ReportListStories.MainReportHeader.args['report']
}