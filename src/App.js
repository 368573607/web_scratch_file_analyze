const React = require("react");
const analyzefile = require("scratch_file_analyze");

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: "{}", jsonvalue: {}, result: {} };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.setState({ jsonvalue: JSON.parse(this.state.value) });
        this.analyze();
    }

    analyze() {
        analyzefile(this.state.jsonvalue).then((resu) => {
            this.setState({ result: resu });
        }).catch((err) => {
            this.setState({ result: err });
        });
    }

    render() {
        return (
            <div>
                <h1>Scratch分析器</h1>
                <textarea value={this.state.value} onChange={this.handleChange} />
                <p>
                    解析结果：
                    {JSON.stringify(this.state.result)}
                </p>
            </div>
        )
    }
}

module.exports = App;