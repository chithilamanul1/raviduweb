const token = 'EAA9Fddrs4fQBR3NgLwRvAlf8SgJQkInq54JHfZCJG4pCirlImnMMXmsZAml4uZBX1ZC6ZCan56iIjIIkdwfRwkVqt5PZCOlZAqhyef5ZAdZAQXdwRei0Bo9lNR8c43Mf3FIhKNPb7vo6JL5lNmicyHZARqEZCV6ZCZBN8yoRnyY19V2bCAEX3piTC3M9GnEshmIHuqa0akorRrTyBvPZAHLJo9Iq8kcoVTUo5RdZANfGS3EdAZDZD';

async function test() {
  console.log('Testing Facebook /me/accounts...');
  try {
    const res = await fetch(`https://graph.facebook.com/v19.0/me/accounts?access_token=${token}&fields=id,name,instagram_business_account`);
    const data = await res.json();
    console.log('Accounts Response:', JSON.stringify(data, null, 2));

    if (data.data && data.data.length > 0) {
      for (const page of data.data) {
        if (page.instagram_business_account) {
          const igId = page.instagram_business_account.id;
          console.log(`\nFound Instagram Business Account ID: ${igId} on Page: ${page.name}`);
          
          console.log(`Testing media fetch for IG account ${igId}...`);
          const mediaRes = await fetch(`https://graph.facebook.com/v19.0/${igId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}&limit=4`);
          const mediaData = await mediaRes.json();
          console.log('Media Response:', JSON.stringify(mediaData, null, 2));
        } else {
          console.log(`\nPage "${page.name}" has no linked instagram_business_account.`);
        }
      }
    }
  } catch(e) {
    console.error(e);
  }
}

test();
