const token = 'EAA9Fddrs4fQBRZBAJ7ldDztnDYwViYoLwEsmwGcrdvK0tZABquEH17O3jMMU5V9ZCDs0OcPOLlvWjn2agtNFeoYNHf2u8ZCQ4nUzUrnsKZCwPm8XEnrgNRco2QOoJzyt4w6vtaQKJeB53gx2RtQ99Hq7QnVdrIB22ZAtDUS6ETiZBE5XbpUWZC9ZBg5nBdPAZCYm6ZBmEVefZB47CxZAsP3PMT4tGAI6ZCTz5C77razECPodS8dBJXz04gwWoKWO5WvYJrAOGP1Cp3n3R0T92Uc30WedLQzFXC5sygGuZB9pkwSScyvxkZAYoaowkzltEXOXsEU9mDboJ0v6XGNUYbOd';

async function test() {
  // Test Basic Display API
  console.log('Testing graph.instagram.com/me/media...');
  const res1 = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}&limit=4`);
  const data1 = await res1.json();
  console.log('Basic Display API Response:', JSON.stringify(data1, null, 2));

  // Test Facebook Graph API /me
  console.log('\nTesting graph.facebook.com/me...');
  const res2 = await fetch(`https://graph.facebook.com/v19.0/me?access_token=${token}`);
  const data2 = await res2.json();
  console.log('Facebook /me Response:', JSON.stringify(data2, null, 2));

  // Test Facebook Graph API /me/accounts (Pages)
  console.log('\nTesting graph.facebook.com/me/accounts...');
  const res3 = await fetch(`https://graph.facebook.com/v19.0/me/accounts?access_token=${token}`);
  const data3 = await res3.json();
  console.log('Facebook /me/accounts Response:', JSON.stringify(data3, null, 2));
}

test();
