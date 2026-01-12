import { projects } from '@/src/data/mockData'
import { notFound } from 'next/navigation'
import { DetailsContent } from '@/src/components/sections/details/DetailsContent'
import { DetailsVideo } from '@/src/components/sections/details/DetailsVideo'

type Props = {
  params: Promise<{ id: string }>
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { id } = await params
  const projectId = Number(id)

  const project = projects.find((p) => p.id === projectId)

  if (!project) return notFound()

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-violet-900/20 via-transparent to-violet-900/10">
      <DetailsContent project={project} />
      <DetailsVideo project={project} />
    </div>
  )
}
