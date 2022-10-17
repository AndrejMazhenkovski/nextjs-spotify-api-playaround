export { default } from 'next-auth/middleware';

export const config = { matcher: ['/'] };

// export async function middleware(req) {
//   const token = await getToken({ req, secret: process.env.JWT_SECRET });
//   console.log(token);
//   console.log('ovde sme buraz');

//   const { pathname } = req.nextUrl;

//   if (pathname.includes('/api/auth') || token) {
//     return NextResponse.next();
//   }

//   if (!token && pathname !== '/login') {
//     // req.nextUrl.pathname = '/login';
//     return NextResponse.redirect(req.nextUrl);

//     // return NextResponse.rewrite(new URL('/login', req.url));
//   }
// }
// OLD code from PAPAREACT - not working anymore
