
// import React, { Component, Fragment } from 'react'
// import { Header, Footer } from './Layout'
// import Home from './Pages/Home'
// import { webform, webOptions } from '../store.js'
// import { Grid, Paper, Typography, Button } from '@mui/material'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import SendData from './SendData'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Samplewebform } from './Pages/SampleWebForm'
// import ResponsiveAppBar from './Layout/Header'
// import { Routes } from "react-router"
// import New from './Pages/New';







// export default class extends Component {


//   state = {
//     webOptions,
//     wOption: {}
//   }

//   styles = {
//     Paper: {
//       padding: 20,
//       marginTop: 10,
//       marginBottom: 10,
//       height: 500,
//       overflowY: 'auto'
//     }
//   }

//   getOptionsByCategory() {
//     return Object.entries(
//       this.state.webOptions.reduce((webOptions, wOption) => {
//         const { webform } = wOption 

//         webOptions[webform] = webOptions[webform]
//           ? [...webOptions[webform], wOption]
//           : [wOption]

//         return webOptions
//       }, {})
//     )
//   }

//   handleOptionSelected = id => {
//     this.setState(({ webOptions }) => ({
//       wOption: webOptions.find(opt => opt.id === id)
//     }))
//   }


//   render() {
//     console.log(this.getOptionsByCategory())
//     const webOptions = this.getOptionsByCategory(),
//       { wOption } = this.state
    

//     return <Fragment>
//       <Header/>

//       <div className = "Router">
      
//         <ResponsiveAppBar />
//         <Routes>
//           <Route path = "/" element = {<Home />} />
//           <Route path = "New" element = {<New />} />
//         </Routes>
//       </div>

//       <Home
//         wOption = {wOption}
//         webOptions = {webOptions}
//         onSelect = {this.handleOptionSelected}
        
//       />

    

      {/* <Grid container>
        <Grid item>
            <Paper style = {this.styles.Paper}>
            {webOptions.map(([group, webOptions]) =>
                <Fragment>
                    <Typography
                        variant = "h6"
                        style = {{textTransform: 'capitalize'}}
                    >
                        {group}
                    </Typography>

                    <List component = "ul">
                        {webOptions.map(({id, title}) =>
                            <ListItem 
                              button
                              onClick={() => this.handleOptionSelected(id)}
                            > 
                              <ListItemText primary={title}/>
                            </ListItem>
                        )}
                    </List>
                </Fragment>
          )}      
            </Paper>    
        </Grid>
        <Grid item sm>
          <Paper style = {this.styles.Paper}>
            <Fragment>

            <WebForm/>
            <HelloWorld
            wOption = {wOption}
            webOptions = {webOptions}
            onSelect = {this.handleOptionSelected}
            />
            

            </Fragment>
          </Paper>
        </Grid>

        {webOptions.map(({id}) =>
          <ListItem>
            
            

          </ListItem> 
        )}



      </Grid> */}


      {/* <Footer
        webform = {webform}
      />
    </Fragment>
  }

} */}
