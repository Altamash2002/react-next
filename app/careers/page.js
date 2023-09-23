import Link from "next/link"

const page = () => {
  return (
    <div>
        <h1>This is the Careers Page</h1>        
        <Link href="/careers/jobs">Jobs</Link>
    </div>
  )
}

export default page