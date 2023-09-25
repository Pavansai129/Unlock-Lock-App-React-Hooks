import {useState} from 'react'
import {AppContainer, Image, Text, Button} from './styledComponents'

// Write your code here
const Unlock = () => {
  const [isLocked, setLock] = useState(false)
  const onClickLock = () => {
    setLock(prevState => !prevState)
  }
  const lockImage = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const lockText = isLocked ? 'unlock' : 'lock'
  const text = isLocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isLocked ? 'Lock' : 'Unlock'

  return (
    <AppContainer>
      <Image src={lockImage} alt={lockText} />
      <Text>{text}</Text>
      <Button type="button" onClick={onClickLock}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}

export default Unlock
