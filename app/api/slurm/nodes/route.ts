import { NextResponse } from "next/server";
import { env } from "process";

export async function GET() {
  const res = await fetch(
    `http://${env.SLURM_SERVER}/slurm/${env.SLURM_API_VERSION}/nodes`,
    {
      headers: {
        "X-SLURM-USER-NAME": `${env.SLURM_API_ACCOUNT}`,
        "X-SLURM-USER-TOKEN": `${env.SLURM_API_TOKEN}`,
      },
      next: {
        revalidate: 30,
      }
    }
  );
  const data = await res.json();
  return NextResponse.json(data);
}
