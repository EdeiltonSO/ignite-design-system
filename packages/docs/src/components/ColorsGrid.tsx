import { colors } from '@igniteui-edeilton/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div
        key={key}
        style={{
          backgroundColor: color,
          padding: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
        }}
      >
        <strong>${key}</strong>
        <strong>{color}</strong>
      </div>
    )
  })
}
