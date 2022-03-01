// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'https://gracc.opensciencegrid.org' })


export default async function handler(req, res) {
  console.log("Starting request to gracc.opensciencegrid.org");
  const result = await client.transport.request({
    method: 'POST',
    path: '/q/ps_meta*/_search',
    body: {
      "query": {
        "bool": {
          "must": [
            {
              "range": {
                "timestamp": {
                  "gte": "now-1y",
                  "lt": "now"
                }
              }
            }
          ]
        }
      },
      "aggs": {
        "host": {
          "terms": {
            "field": "host.keyword",
            "size": 100000
          },
          "aggs": {
            "site_name": {
              "terms": {
                "field": "config.site_name.keyword",
                "size": 10000
              },
              "aggs": {
                "location": {
                  "geo_centroid": {
                    "field": "geolocation"
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  //console.log(result);
  //console.log(result._shards.failures);
  var hosts = new Array();
  result.aggregations.host.buckets.forEach(function (bucket) {
    try {
      //console.log(bucket.site_name.buckets[0].location);
      var host = {
        "host": bucket.key,
        "site_name": bucket.site_name.buckets[0].key,
        "location": {"lat": bucket.site_name.buckets[0].location.location.lat, "lon": bucket.site_name.buckets[0].location.location.lon}
      }
      hosts.push(host);
    } catch (e) {
      console.log("Failed to parse host: " + bucket.key + " " + e);
    }
  });
  //console.log(hosts);

  console.log("Finished request to gracc.opensciencegrid.org");
  res.status(200).json({ hosts: hosts, updatetime: Date.now() });
}
