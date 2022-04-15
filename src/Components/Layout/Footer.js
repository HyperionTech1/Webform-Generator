import React from 'react'
import { Paper, Tabs } from '@mui/material'
import { Tab } from '@mui/material'

export default ({webform}) =>
<Paper>
    <Tabs
        value={0}
        indicatorColor = "primary"
        textColor = "primary"
        centered
    >
        <Tab label="All" />
        {webform.map(group =>
            <Tab label={group} />
        )}
    </Tabs>
</Paper>
