# Barcamp2016 website
--
#### Dependencies

- *react*
- *react-dom*
- *webpack*
- *react-redux*
- *redux*
- *babel-loader*
- *babel-core*
- *babel-preset-es2015*
- *babel-preset-react*

### How to run
 `npm install` (First time)

 `webpack-dev-server --progress --colors`

 open `http://localhost:8080` or `http://localhost:8080/webpack-dev-server`
 
## Get started

### How to add new section

Your code will be written in `section.jsx`, after that add your component into `wrapper.jsx`

for example
>***section.jsx***
>
>~~~~
class Section extends React.Component {
  render() {
    return (
      <div className="section flex flex-center" id={this.props.sectionId}>
        <p className="text">This is main page</p>
      </div>
    );
  }
}
export default Section;
~~~~

Second, add your component to `wrapper.jsx`
>***wrapper.jsx***
>
>~~~~
><Section sectionId="section3" />
>~~~~
>I'm passing `sectionId` to my child component. (We are using `id` to link between `<a></a>` and `<Section />`)
>
>
>

Finally, Add new link tag `<a></a>` in `menu.jsx`
>***menu.jsx***
>
>~~~~
><a onClick={this.__changeState.bind(this)} className="scroll" href="#section3">Section3</a>
>~~~~
>You have to only change href to be your `sectionId`

