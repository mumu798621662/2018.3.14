import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    // render() {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <h1 className="App-title">Welcome to React</h1>
    //       </header>
    //       <p className="App-intro">
    //         To get started, edit <code>src/App.js</code> and save to reload.
    //       </p>
    //     </div>
    //   );
    // }

//     constructor(props){
//         super(props)
//         this.state={date:new Date()}
//     }
//     componentDidMount() {
//         this.timeUpdate = setInterval(() => {
//             this.change()
//         },1000)
//     }
//     componentWillUnmount(){
//         clearInterval(this.timeUpdate)
//     }
//     render(){
//         return (
//             <div>
//             <div>现在的时间是：</div>
//             <span>{this.state.date.toLocaleTimeString()}</span>
//             </div>
//         )
//     }
//     change(){
//         this.setState({date:new Date()})
//     }
//
// }

    // constructor(props) {
    //     super(props)
    //     this.state = {isToggle: true}
    //     this.handleClick=this.handleClick.bind(this)
    // }
    //
    // handleClick() {
    //     this.setState(prevState => ({
    //         isToggle: !prevState.isToggle
    //     }))
    // }
    //
    // render() {
    //     return (
    //         <button onClick={this.handleClick}>
    //             {this.state.isToggle ? 'on' : 'off'}
    //         </button>
    //     )
    // }

//     constructor(props) {
//         super(props);
//         this.state = {showWarning: true}
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
//
//     handleToggleClick() {
//         this.setState(prevState => ({
//             showWarning: !prevState.showWarning
//         }));
//     }
//
//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning}/>
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//             </div>
//         );
//     }
// }
//
// function WarningBanner(props) {
//     if (!props.warn) {
//         return null;
//     }
//
//     return (
//         <div className="warning">
//             Warning!
//         </div>
//     );

//     constructor(props){
//         super(props)
//          this.state={isShow:true}
//          this.showToggle=this.showToggle.bind(this)
//     }
//     render(){
//         return(
//             <div>
//                 <WaringBanner warn={this.state.isShow}/>
//                 <button onClick={this.showToggle}>{this.state.isShow? '隐藏':'显示'}</button>
//             </div>
//         )
//     }
//     showToggle(){
//         this.setState(prevState=>{
//             return {isShow:!prevState.isShow}
//         })
//     }
// }
// function WaringBanner(props){
//     if(!props.warn){
//        return null;
//     }else{
//         return <h1>It's Waring</h1>
//     }
// }


    // constructor(props){
    //     super(props)
    //     this.state={value:''}
    //     this.changes=this.changes.bind(this)
    //     this.submits=this.submits.bind(this)
    // }
    // render(){
    //     return (
    //
    //             <form onSubmit={this.submits}>
    //                 <label>
    //                     name:
    //                     <input type="text" value={this.state.value} onChange={this.changes} placeholder="请输入内容" />
    //                 </label>
    //                 <input type="submit" value='Submit' />
    //             </form>
    //     )
    // }
    // changes(e){
    //     this.setState({value:e.target.value.toUpperCase()})
    // }
    // submits(e){
    //     alert("the name is "+this.state.value)
    //     e.preventDefault()
    // }

    constructor(props){
        super(props)
        this.state={value:'qianduan'}
        this.changes=this.changes.bind(this)
        this.submits=this.submits.bind(this)
    }
    render(){
        return(
            <form onSubmit={this.submits}>
                <label>
                    请选择
                    <select value={this.state.value} onChange={this.changes}>
                        <option value="UI">UI</option>
                        <option value="qianduan">前端</option>
                        <option value="houtai">后台</option>
                        <option value="ceshi">测试</option>
                    </select>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
    changes(e){
        this.setState({value:e.target.value})
    }
    submits(e){
        alert('我的选择是： '+this.state.value)
        e.preventDefault()

    }

}
export default App;