import './Columns.css';

const Columns = () => {
    return (
        <section className="content">
            <div className="row">
                <div className="column green">
                    <div className="box">Content 1</div>
                </div>
                <div className="column orange">
                    <div className="box">Content 2</div>
                </div>
                </div>
                <div className="row reverse">
                <div className="column orange">
                    <div className="box">Content 3</div>
                </div>
                <div className="column green">
                    <div className="box">Content 4</div>
                </div>
            </div>
        </section>
    )
  }
  
export default Columns