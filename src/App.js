const React = require("react");
const analyzefile = require("scratch_file_analyze");

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: "{}", result: {} };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state.value);
        this.analyze();
    }

    analyze() {
        analyzefile(JSON.parse(this.state.value)).then((resu) => {
            this.setState({ result: resu });
        }).catch((err) => {
            this.setState({ result: err });
        });
    }

    render() {
        return (
            <div>
                <h1>Scratch3 文件分析器</h1>
                <textarea value={this.state.value} onChange={this.handleChange} />
                <p>
                    解析结果：
                    {JSON.stringify(this.state.result)}
                </p>
                <p><a href="https://github.com/368573607/web_scratch_file_analyze/tree/add">源代码</a></p>
            </div>
        )
    }
}

module.exports = App;