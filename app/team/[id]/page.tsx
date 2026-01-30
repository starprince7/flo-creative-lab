import GradientCta from '@/components/shared/GradientCta'
import LayoutOne from '@/components/shared/LayoutOne'
import TeamDetailsBody from '@/components/shared/TeamDetailsBody'
import singelTeamInfo from '@/data/teamMemberV2.json'

export async function generateStaticParams() {
  return singelTeamInfo.map((team) => ({
    id: team.id,
  }))
}

const TeamDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const teamId = (await params).id
  const data = singelTeamInfo.find((team) => team.id === teamId)

  return (
    <LayoutOne>
      <TeamDetailsBody teamData={data ?? singelTeamInfo[0]} />
      <GradientCta />
    </LayoutOne>
  )
}

export default TeamDetailsPage
