import useTheme from '../hooks/useTheme'
import './ThemeSelector.css'
import lightToggle from '../assets/light-mode.svg'
import darkToggle from '../assets/dark-mode.svg'

const themeColors = ['#b72024', 'red', '#888988']

export default function ThemesSelector() {
  const { changeColor, changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='theme-selector'>
      <div className="toggle-mode">
        <img 
          src={mode === 'dark' ? lightToggle : darkToggle} 
          onClick={toggleMode}
          alt="dark/light toggle mode" 
          style={{filter: mode === 'light' ? 'invert(100%)' : 'invert(20%)'}}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => {
          return (
            <div 
              key={color}
              onClick={() => changeColor(color)}
              style={{background: color}}
            />
          )
        })}
      </div>
    </div>
  )
}
