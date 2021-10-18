import React from "react";
import Modal from "../../Components/UI/Modal/Modal";

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null,
        };

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        };
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        render() {
            this.reqInterceptor = axios.interceptors.request.use((req) => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(
                (res) => res,
                (error) => {
                    this.setState({ error: error });
                }
            );

            return (
                <>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </>
            );
        }
    };
};

export default withErrorHandler;
