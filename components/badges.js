


var badgeClasses = {
  'Documentation': 'bg-success',
  'Troubleshooting': 'bg-warning text-dark',
  'Measurements': 'bg-info',
  'Certificate Required': 'bg-danger',
};

export default function Badges({ badges }) {
  return (
    <>
      {badges.map(badge => (
        <span key={badge} style={{marginRight: '0.5em'}} className={`badge ${badgeClasses[badge]}`}>{badge}</span>
      ))}
    </>
  )
}