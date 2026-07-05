import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // In production you'd send this to an error-reporting service.
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 text-center text-neutral-300">
          <h1 className="mb-3 text-3xl font-bold text-white">Something went wrong</h1>
          <p className="mb-6 max-w-md text-neutral-400">
            An unexpected error occurred. Please reload the page — if it keeps happening,
            feel free to reach out directly.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-gradient-to-r from-[#850BC3] to-[#a855f7] px-8 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105"
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
