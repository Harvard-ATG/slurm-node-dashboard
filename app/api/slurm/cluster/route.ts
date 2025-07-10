export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";
import { env } from "process";

export async function GET() {
  const res = await fetch(
    `http://${env.SLURM_SERVER}/slurmdb/${env.SLURM_API_VERSION}/clusters`,
    {
      headers: {
        "X-SLURM-USER-NAME": `${env.SLURM_API_ACCOUNT}`,
        "X-SLURM-USER-TOKEN": `${env.SLURM_API_TOKEN}`,
      },
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}
