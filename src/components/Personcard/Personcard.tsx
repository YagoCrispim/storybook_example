import { Avatar } from '../../components'
import { PersoncardProps } from './Personcard.types'

export const Personcard = (props: PersoncardProps) => {
  const { name, job, userImage, maxWidth = '200' } = props
  const image = userImage || 'https://via.placeholder.com/150'

  return (
    <div style={styles.card}>
      <Avatar circle maxWidth={maxWidth} src={image} alt="l" />

      <br />

      <span className="text-5xl text-gray-800 font-bold">{name}</span>

      <br />

      <span>{job}</span>
    </div>
  )
}

const styles: any = {
  card: {
    height: '400px',
    width: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    border: '2px solid rgba(148, 163, 184, 1)',
    padding: '3rem 0px'
  }
}
