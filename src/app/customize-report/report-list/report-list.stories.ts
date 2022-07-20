import { Meta, Story } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { ReportListComponent } from './report-list.component';

export default {
    component: ReportListComponent,
    title: 'ReportList',
    excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
    onReportSelection: action('onReportSelection')
};

const Template: Story = args => ({
    props: {
        ...args,
        onReportSelection: actionsData.onReportSelection
    },
});

export const MainReportHeader = Template.bind({});
MainReportHeader.args = {
    report: {
        id: '1',
        title: 'Your Current Portfolio',
        status: 'check',
        heading:'primary'
    },
};

export const SubReportList1 = Template.bind({});
SubReportList1.args = {
    report: {
        id: '2',
        title: 'Your Selected Model Overview',
        status: 'uncheck',
        heading:'2'
    },
};

export const SubReportList2 = Template.bind({});
SubReportList2.args = {
    report: {
        id: '3',
        title: 'Your Selected Model Account Details',
        status: 'uncheck',
        heading:'3'
    },
};