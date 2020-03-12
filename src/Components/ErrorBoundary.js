import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
      if (this.state.hasError) {
        return(
            <p>An Error Has Occurred</p>
        )} else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;