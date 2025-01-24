import requests
import pandas as pd
import json
import time
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
url = "https://gess.pagosimple.com.co/api/v3/requests"
headers = {"authtoken": "6C5ACD78-ABE8-44DD-A895-A2EDD230BBC5"}
indice = 1
AllTickets = []
while True:
 input_data = '''{
 "list_info": {
 "row_count": 100,
 "start_index": ''' + str(indice) + ''',
 "sort_field": "subject",
 "sort_order": "asc",
 "get_total_count": true,
 "search_criteria": [
 {
 "field": "created_time",
 "condition": "greater than",
 "value": "1711538000000" }
 ],
{ "list_info": { "search_criteria": [ { "campo": "hora_de_creación", "condición": "gt", "valor": " 1548201600000 " }, { "campo": "hora_de_creación", "condición": "lt", "valor": " 1548288000000 ", "operador_lógico": "y" } ] } }

 "fields_required": [
 "id",
 "subject",
 "requester",
 "is_overdue",
 "status",
 "group",
 "created_time",
 "resolution",
 "category",
 "subcategory",
 "item",
 "completed_time",
 "time_elapsed",
 "created_by",
 "short_description",
 "responded_time",
 "resolved_time",
 "sla",
 "onhold_scheduler",
 "technician"
 ]
 }
 }'''
 params = {'input_data': input_data}
 response = requests.get(url, headers=headers, params=params, verify=False)
 data = json.loads(response.text)
 # Check the structure of the returned JSON data
 if 'requests' in data:
 tickets = data['requests']
 elif 'data' in data and 'requests' in data['data']:
 tickets = data['data']['requests']
 else:
 print("Unexpected JSON structure. Check the response:")
 break
 AllTickets.extend(tickets)
 total_tickets = len(tickets)
 if total_tickets == 0:
 print(indice)
 break
 indice += 100
 if len(AllTickets) % 5000 == 0:
 print("Esperar")
 time.sleep(5)
Convert the list of ticket dictionaries into a Pandas DataFrame
df = pd.DataFrame(AllTickets)
Save the DataFrame to a JSON file if needed
df.to_json("Tickets_dataframe.json", orient="records")
Display the DataFrame
print("DataFrame created successfully:")
newdataframe = {}
de = pd.DataFrame(newdataframe)
print(df)
print(df.columns)


