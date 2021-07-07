import { TypingChallengeContainer } from '../TypingChallengeContainer/TypingChallengeContainer'
import { TryAgain } from './../TryAgain/TryAgain'
import './TestContainer.css'


export const TestContainer = ({ handleOnType, timerValue, timerStarted, triggerTryAgain, selectedParagraph,
words, characters, mistakes}) => {


    const showChallenge = true; // temporary var (Will be replaced while building the app)

    return (
        <div className="test-container">
            {/* Show the try again or start screen */}
            {
                timerValue > 0
                    ? <div className="typing-challenge-cont">
                            <TypingChallengeContainer 
                                timerStarted={timerStarted}
                                timerValue={timerValue} 
                                handleOnType={handleOnType}
                                selectedParagraph={selectedParagraph}
                                words={words}
                                characters={characters}
                                mistakes={mistakes}
                                />
                          
                    </div>
                    : <div className="try-again-cont">
                            <TryAgain words={words}
                            characters={characters}
                            mistakes={mistakes}
                            triggerTryAgain={triggerTryAgain} />
                    </div>
            }            
        </div>
    )
}