import { NextResponse } from "next/server";

// Force this route handler to run on every request 
export const dynamic = "force-dynamic";

async function getDataMicroService1() {
  return "micro-service-1";
}

async function getDataMicroService2() {
  return "micro-service-2";
}

async function getDataMicroService3() {
  return "micro-service-3";
}

export async function GET() {
  // In a real BFF these would be fetch() calls to separate backend services.
  // The frontend calls one endpoint and receives one consolidated response.
  const [microService1, microService2, microService3] = await Promise.all([
    getDataMicroService1(),
    getDataMicroService2(),
    getDataMicroService3(),
  ]);

  return NextResponse.json({
    pageData: {
      microService1,
      microService2,
      microService3,
    },
  });
}
