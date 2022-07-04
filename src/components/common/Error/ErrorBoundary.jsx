import React from 'react';

const initialState = { error: null };

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidUpdate(prev) {
    if (this.state.error === null) {
      return;
    }
    if (prev.keys !== this.props.keys) {
      this.resetErrorBoundary();
    }
  }

  resetErrorBoundary = () => {
    this.setState(initialState);
  };

  render() {
    const { children, renderFallback } = this.props;
    const { error } = this.state;

    if (error != null) {
      return renderFallback({
        error,
        reset: this.resetErrorBoundary,
      });
    }
    return children;
  }
}
