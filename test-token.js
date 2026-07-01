const token = 'EAA9Fddrs4fQBR7EpGPo7Ww4OHkh6BKVOUVFG6aVZBZAYc45jf7EbfAg38qGryc4ZBeZChT2Bgrki3edAapQRizdN0ZA1VBoKrpGgtylSVVYhuUqg8WOEA3ZBzm6WM9shKqzkvXxcy168YyQW5kDQuRibT1JiRnrO4Kma7P2kAX6rVG2mzhnr5HtbZB2CeeZB7ZA23KNzKa74dPEP5pUj79VJDnVLpMUpOMh2jgnUt';

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
