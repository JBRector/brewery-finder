import { useState } from 'react';

import styles from './question.module.css';

import jason from '../../assets/jason.png';

export const Question = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className={styles.question}>
      <button
        className={`${styles.question__button} ${
          showContent ? styles.active : null
        }`}
        aria-controls="question-content"
        aria-expanded={showContent}
        onClick={() => setShowContent(!showContent)}
        data-testid="question-button"
      >
        <span className={`${styles.question__span} sr-only`}>
          What is this?
        </span>
      </button>
      <div
        id="question-content"
        className={`${styles.question__content} ${
          showContent ? styles.active : null
        }`}
        aria-hidden={!showContent}
        data-testid="question-container"
      >
        {showContent && (
          <>
            <img
              className={styles.question__icon}
              src={jason}
              alt="Jason Rector"
            />
            <p className={styles.question__text} data-testid="question-text">
              This is a sample project put together by{' '}
              <a
                className={styles.question__link}
                href="https://github.com/JBRector"
              >
                Jason Rector
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
