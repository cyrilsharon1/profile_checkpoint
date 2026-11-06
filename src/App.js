import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Ada Lovelace',
      bio: 'Mathematician and writer, widely regarded as the first computer programmer.',
      imgSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=640&q=85',
      profession: 'Mathematician & writer',
    },
    shows: false,
    secondsSinceMount: 0,
  };

  componentDidMount() {
    this.mountTimer = window.setInterval(() => {
      this.setState(({ secondsSinceMount }) => ({
        secondsSinceMount: secondsSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.mountTimer);
  }

  toggleProfile = () => {
    this.setState(({ shows }) => ({ shows: !shows }));
  };

  render() {
    const { person, shows, secondsSinceMount } = this.state;

    return (
      <main className="page-shell">
        <section className="profile-panel" aria-labelledby="page-title">
          <p className="eyebrow">A LITTLE INTRODUCTION</p>
          <h1 id="page-title">Meet the person behind the ideas.</h1>
          <p className="lede">A simple class component, its first state, and a timer that starts when the page mounts.</p>

          <button className="toggle-button" type="button" onClick={this.toggleProfile} aria-expanded={shows}>
            {shows ? 'Hide profile' : 'Show profile'}
            <span aria-hidden="true">{shows ? '−' : '+'}</span>
          </button>

          {shows && (
            <article className="person-card">
              <img className="person-image" src={person.imgSrc} alt={`Portrait of ${person.fullName}`} />
              <div className="person-details">
                <p className="eyebrow">PROFILE</p>
                <h2>{person.fullName}</h2>
                <p className="profession">{person.profession}</p>
                <p className="bio">{person.bio}</p>
              </div>
            </article>
          )}

          <div className="elapsed" role="status" aria-live="polite">
            <span className="elapsed-indicator" />
            <span>Mounted for <strong>{secondsSinceMount}</strong> {secondsSinceMount === 1 ? 'second' : 'seconds'}</span>
          </div>
        </section>
        <footer>CLASS COMPONENT CHECKPOINT <span>·</span> REACT</footer>
      </main>
    );
  }
}

export default App;
