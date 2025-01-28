from flask import Blueprint, request, jsonify
from models import Guest
import qrcode
import io
import base64

routes = Blueprint('routes', __name__)

@routes.route('/guests', methods=['POST'])
def add_guest():
    data = request.json
    guest = Guest(name=data['name'], email=data['email'])
    guest.save()
    return jsonify({'message': 'Guest added successfully'}), 201

@routes.route('/guests', methods=['GET'])
def get_guests():
    guests = Guest.query.all()
    return jsonify([{'name': guest.name, 'email': guest.email} for guest in guests]), 200

@routes.route('/generate_qr/<string:guest_id>', methods=['GET'])
def generate_qr(guest_id):
    guest = Guest.query.get(guest_id)
    if not guest:
        return jsonify({'message': 'Guest not found'}), 404

    qr = qrcode.make(f'Guest ID: {guest.id}')
    img = io.BytesIO()
    qr.save(img, format='PNG')
    img.seek(0)
    qr_base64 = base64.b64encode(img.getvalue()).decode('utf-8')
    
    return jsonify({'qr_code': f'data:image/png;base64,{qr_base64}'}), 200